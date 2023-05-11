export const formatUnix = (unix) => {
    const date = new Date(unix);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours}:${minutes} ${day}/${month}/${year}`
    if(unix) return time;
    return 'Not Updated Yet';
}