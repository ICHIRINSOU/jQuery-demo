//jq接收一个选择器（或数组）selectorOrArray，
//可以通过querySelector获得一个（或者多个）元素elements，
//然后返回一个对象api，可以操控元素elements
window.jQuery = function(selectorOrArray) {
    let elements //声明e
    ;
    if (typeof selectorOrArray === 'string') elements = document.querySelectorAll(selectorOrArray) //    e = 选择器筛选后的元素（有可能是多个元素）
    ;
    else if (selectorOrArray instanceof Array) elements = selectorOrArray //   此时e = 数组
    ;
    return {
        addClass (className) {
            for(let i = 0; i < elements.length; i++){
                const element = elements[i];
                element.classList.add(className) // 在每一个元素上增加相同的className
                ;
            }
            return this //  返回 api => **api**.addClass()
            ;
        },
        find (className) {
            let array = [] // 声明空数组a
            ;
            for(let i = 0; i < elements.length; i++){
                const flag = Array.from(elements[i].querySelectorAll(className)) // 将 【元素中的符合条件的子元素（们）（它们是伪数组）】通过arrayfrom转化为真正的数组
                ;
                array = array.concat(flag) //   每次循环拼接所有的符合条件的子元素，最后拼接成包含所有符合条件元素的数组
                ;
            }
            return jQuery(array) //    返回一个新的api
            ;
        }
    };
};

//# sourceMappingURL=index.3e2f9b55.js.map
