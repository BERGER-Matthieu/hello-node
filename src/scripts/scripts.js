export const randomTetoMusic = () => {
    const urls = ["LvYL8u4p-aM", "0iVlSNpq8i8", "F38EuG2dAyM", "HTxwOxFt5d4"];
    const res = urls[Math.floor(Math.random() * urls.length)]
    return res
}