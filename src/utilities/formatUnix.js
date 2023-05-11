export const formatUnix = (unix) => {
    const date = new Date(unix * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    return `${hours}:${minutes} ${day}/${month}/${year}`;
}