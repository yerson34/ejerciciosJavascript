function likes(num) {
    if (num < 1000) return num.toString();
    return (num < 1000000 ? Math.floor(num / 1000) + 'K' : Math.floor(num / 1000000) + 'M');
}