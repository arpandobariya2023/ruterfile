import React from 'react';

const Filtter = () => {
    let myArr = [
        {
            studenName: "jack",
            age: 16,
            Class: 6,

        },
        {
            studenName: "tom",
            age: 17,
            Class: 6,
        },
        {
            studenName: "jerry",
            age: 15,
            Class: 4,

        },
        {
            studenName: "dom",
            age: 17,
            Class: 5,
        }

    ];
    let newArr = [ 12,1,23,45,16,27,8,9]

    return (
        <div>
            {
                myArr
                    .filter((i) => i.age > 16)
                    .map((name) =>
                        <li>{name.age}</li>)
            }
            <p>{newArr.sort()}</p>
            <p>{newArr.reverse()}</p>

        </div>
    );
}

export default Filtter;
