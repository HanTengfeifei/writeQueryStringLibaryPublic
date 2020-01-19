const doIt = (nums, k, m) => {
    console.log(nums, k, m);
    let result = 0;
    const kth = [...new Set([...nums])].sort().reverse()[k - 1];
    const mth = [...new Set([...nums])].sort().reverse()[m - 1];
    nums.map(item => {
        if (item === kth || item === mth) {
            result += item;
        }
    });
    return result;
};
https://www.cnblogs.com/star91/p/han-shu-shi-bian-chengcompose-yupipe.html