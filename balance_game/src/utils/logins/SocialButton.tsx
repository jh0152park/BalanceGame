import { Center, HStack, Image, Text } from "@chakra-ui/react";
import { onKakaoClick, onNaverClick } from "./SocialLogin";

interface IProps {
    width?: number;
    height: number;
    logoWidth: number;
    logoHeight: number;
    logoColor: string;
    bgColor: string;
    logoUrl: string;
    social: string;
}

// onKakaoClick, onNaverClick
export default function SocialButton({
    width,
    height,
    logoWidth,
    logoHeight,
    logoColor,
    bgColor,
    logoUrl,
    social,
}: IProps) {
    function onSocialLoginClick() {
        if (social === "카카오") {
            onKakaoClick();
        } else {
            onNaverClick();
        }
    }

    return (
        <Center
            w="100%"
            h={`${height}px`}
            bgColor={bgColor}
            borderRadius="5px"
            _hover={{
                cursor: "pointer",
            }}
            onClick={onSocialLoginClick}
        >
            <HStack>
                <Image
                    w={`${logoWidth}px`}
                    h={`${logoHeight}px`}
                    color={logoColor}
                    src={logoUrl}
                    objectFit="cover"
                />
                <Text fontWeight="bold" fontSize="18px" color={logoColor}>
                    {social} 로그인
                </Text>
            </HStack>
        </Center>
    );
}
