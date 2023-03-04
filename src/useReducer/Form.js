import "./Form.module.css";

import React, { useState, useReducer, useRef } from "react";

import {
    INITIAL_STATE,
    ACTIONS_TYPE,
    formReducer,
} from "./reducers/formReducer";
const { CHANGE_TYPE, ADD_TAG, REMOVE_TAG, INCREASE_QTY, DECREASE_QTY } =
    ACTIONS_TYPE;

export default function Form() {
    return (
        <div>
            <BestPractice />
        </div>
    );
}

const BadPractice = () => {
    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: 0,
        category: "",
        tags: [],
        images: {
            sm: "",
            md: "",
            lg: "",
        },
        quantity: 0,
    });

    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const tagRef = useRef();

    const handleTags = () => {
        const tags = tagRef.current.value.split(",");
        tags.forEach((tag) => {
            setProduct((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
        });
    };

    const handleRemoveTag = (tag) => {
        setProduct((prev) => ({
            ...prev,
            tags: prev.tags.filter((t) => t !== tag),
        }));
    };

    const handleIncrease = () => {
        setProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
    };

    const handleDecrease = () => {
        setProduct((prev) => ({
            ...prev,
            quantity: prev.quantity - 1,
        }));
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="desc"
                    onChange={handleChange}
                    placeholder="Desc"
                />
                <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    placeholder="Price"
                />
                <p>Category:</p>
                <select name="category" id="category" onChange={handleChange}>
                    <option value="sneakers">Sneakers</option>
                    <option value="tshirts">T-shirts</option>
                    <option value="jeans">Jeans</option>
                </select>
                <p>Tags:</p>
                <textarea
                    ref={tagRef}
                    placeholder="Seperate tags with commas..."
                ></textarea>
                <button type="button" onClick={handleTags}>
                    Add Tags
                </button>
                <div className="tags">
                    {product.tags.map((tag) => (
                        <small key={tag} onClick={() => handleRemoveTag(tag)}>
                            {tag}
                        </small>
                    ))}
                </div>
                <div className="quantity">
                    <button type="button" onClick={handleDecrease}>
                        -
                    </button>
                    <span>Quantity ({product.quantity})</span>
                    <button type="button" onClick={handleIncrease}>
                        +
                    </button>
                </div>
            </form>
        </div>
    );
};

const BestPractice = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
    const tagRef = useRef();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        dispatch({ type: CHANGE_TYPE, payload: { name, value } });
    };

    const handleTags = () => {
        const tags = tagRef.current.value.split(",");

        dispatch({ type: ADD_TAG, payload: { tags } });
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="desc"
                    onChange={handleChange}
                    placeholder="Desc"
                />
                <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    placeholder="Price"
                />
                <p>Category:</p>
                <select name="category" id="category" onChange={handleChange}>
                    <option value="sneakers">Sneakers</option>
                    <option value="tshirts">T-shirts</option>
                    <option value="jeans">Jeans</option>
                </select>

                <p>Tags:</p>
                <textarea
                    ref={tagRef}
                    placeholder="Seperate tags with commas..."
                ></textarea>
                <button type="button" onClick={handleTags}>
                    Add Tags
                </button>
                <div className="tags">
                    {state.tags.map((tag,idx) => (
                        <small
                            key={idx}
                            onClick={() =>
                                dispatch({ type: REMOVE_TAG, payload: { tag } })
                            }
                        >
                            {tag}
                        </small>
                    ))}
                </div>

                <div className="quantity">
                    <button
                        type="button"
                        onClick={() => dispatch({ type: DECREASE_QTY })}
                    >
                        -
                    </button>
                    <span>Quantity ({state.quantity})</span>
                    <button
                        type="button"
                        onClick={() => dispatch({ type: INCREASE_QTY })}
                    >
                        +
                    </button>
                </div>
            </form>
        </div>
    );
};
