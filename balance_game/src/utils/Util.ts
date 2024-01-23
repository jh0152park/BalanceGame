export function go_to_top(position: number): void {
    window.scrollTo({ top: position, behavior: "smooth" });
}

export function go_to_id(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function refresh() {
    window.location.reload();
}

export function sleep(ms: number) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
}
