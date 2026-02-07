import React from "react";
// Компонент для добавления статьи
const AddArticle = ({
    name,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd
}) => {
    return (
        <section
            style={{
                marginBottom:'20px',
                border: "1px solid black",
                padding: "10px"
            }}
        >
            <h1>{name}</h1>
            <input
                placeholder='Title'
                value={name}
                onChange={onChangeTitle}
            />
            <input
                placeholder='Summary'
                value={summary}
                onChange={onChangeSummary}
            />
            <button onClick={onClickAdd}>Add Article</button>
        </section>
    );
};
export default AddArticle;

