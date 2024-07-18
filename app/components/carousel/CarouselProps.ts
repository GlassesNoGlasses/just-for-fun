
export default interface CarouselProps {
    children: JSX.Element[]
    infinite?: boolean  // whether the carousel should loop infinitely
    autoPlay?: boolean  // whether the carousel should automatically advance
    interval?: number   // time in milliseconds between auto-advances
}
