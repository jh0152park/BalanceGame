import React, { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

export default function GoogleAds() {
    useEffect(() => {
        const pushAd = () => {
            try {
                const adsbygoogle = window.adsbygoogle;
                // console.log({ adsbygoogle })
                adsbygoogle.push({});
            } catch (e) {
                console.error(e);
            }
        };

        let interval = setInterval(() => {
            // Check if Adsense script is loaded every 300ms
            if (window.adsbygoogle) {
                pushAd();
                // clear the interval once the ad is pushed so that function isn't called indefinitely
                clearInterval(interval);
            }
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-2088200838674495"
                data-ad-slot="8561726116"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
}
