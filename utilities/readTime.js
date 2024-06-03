function readTime(str) {
    const wpm=225
    const arr = str?.split(' ');
    const length=arr?.filter(word => word !== '').length;
    return Math.ceil(length / wpm);  
}
export default readTime