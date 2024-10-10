const response = [
    { id: 4, parentId: 3, name: 'Days' },
    { id: 1, parentId: null, name: 'Years' },
    { id: 2, parentId: 1, name: 'Months' },
    { id: 5, parentId: null, name: 'Satrs' },
    { id: 3, parentId: 2, name: 'Weeks' },
    { id: 6, parentId: 5, name: 'Sun' },
    { id: 7, parentId: 5, name: 'Proxima centauria' },
    { id: 8, parentId: null, name: 'Dogs' }
];

// export default response;

const formatData = (data) => {
    const map = {};
    const result = [];

    data.forEach((item) => {
        item.children = [];
        map[item.id] = item;
    });

    data.forEach((item) => {
        if (item.parentId !== null) {
            map[item.parentId].children.push(item);
        }
        else {
            result.push(item);
        }
    })
    console.log(result);
    return result;
}

formatData(response);
