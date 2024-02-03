const config = useRuntimeConfig();

export function getIconUrl(
    symbol: string,
    width: string = '128',
    style: string = 'color'
): string {

    const imagePath = new URL(`${config.public.downloadBaseUrl}/coins/${width}/${style}/${symbol}.png`);

    return imagePath.toString();
}
