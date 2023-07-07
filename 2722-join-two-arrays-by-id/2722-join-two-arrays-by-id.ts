function join(arr1: any[], arr2: any[]): any[] {
    let i = 0;
    let j = 0;
    const result = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i].id < arr2[j].id) {
            result.push(arr1[i]);
            i++;
        } else if (arr1[i].id > arr2[j].id) {
            result.push(arr2[j])
            j++;
        } else {
            result.push({ ...arr1[i], ...arr2[j] });
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};