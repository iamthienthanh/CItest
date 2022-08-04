function merge2String(s1, s2) {
    ans = ''
    count = 0
    for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
        ans += s1[i]
        ans += s2[i]
        count++
    }
    if (s1.length > s2.length) {
        for (let i = count; i < s1.length; i++) {
            ans += s1[i]
        }
    }
    else {
        for (let i = count; i < s2.length; i++) {
            ans += s2[i]
        }
    }
    return ans
}
console.log(merge2String("abc", "123"))
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));