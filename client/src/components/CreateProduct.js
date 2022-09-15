import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {createProduct, fetchCategories} from "../http/productAPI";
import {observer} from "mobx-react-lite";

const CreateProduct = observer(() => {
    const {product} = useContext(Context)
    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [oldPrice, setOldPrice] = useState('')
    const [order, setOrder] = useState('')
    const [count, setCount] = useState('')
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchCategories().then(data => product.setCategories(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('rating', rating)
        formData.append('count', `${count}`)
        formData.append('categoryId', categoryId)
        formData.append('order', order)
        formData.append('price', `${price}`)
        formData.append('oldPrice', `${oldPrice}`)
        formData.append('description', `${description}`)
        formData.append('img', file)
        createProduct(formData).then(() => {alert('product success added'); window.location.reload()})
    }

    return (
        <div className="admin__box">
            <h2 className="admin__title">Add product</h2>
            <div className="admin__form">
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={"product name"} className="admin__input"/>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder={"product description"} className="admin__input"/>
                <input type="text" value={price} onChange={e => setPrice(e.target.value)} placeholder={"product price"} className="admin__input"/>
                <input type="text" value={oldPrice} onChange={e => setOldPrice(e.target.value)} placeholder={"product old price"} className="admin__input"/>
                <input type="text" value={rating} onChange={e => setRating(e.target.value)} placeholder={"product rating"} className="admin__input"/>
                <input type="text" value={order} onChange={e => setOrder(e.target.value)} placeholder={"product order"} className="admin__input"/>
                <input type="text" value={count} onChange={e => setCount(e.target.value)} placeholder={"product count"} className="admin__input"/>
                <input type="file" onChange={selectFile}/>
                <select onChange={e => {setCategoryId(e.target.value)}}>
                    {product.categories.map(category =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </select>
                <button onClick={addProduct}>add product</button>
            </div>
        </div>
        // <Modal
        //     show={show}
        //     onHide={onHide}
        //     centered
        // >
        //     <Modal.Header closeButton>
        //         <Modal.Title id="contained-modal-title-vcenter">
        //             Добавить устройство
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         <Form>
        //             <Dropdown className="mt-2 mb-2">
        //                 <Dropdown.Toggle>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
        //                 <Dropdown.Menu>
        //                     {product.types.map(type =>
        //                         <Dropdown.Item
        //                             onClick={() => product.setSelectedType(type)}
        //                             key={type.id}
        //                         >
        //                             {type.name}
        //                         </Dropdown.Item>
        //                     )}
        //                 </Dropdown.Menu>
        //             </Dropdown>
        //             <Dropdown className="mt-2 mb-2">
        //                 <Dropdown.Toggle>{product.selectedBrand.name || "Выберите тип"}</Dropdown.Toggle>
        //                 <Dropdown.Menu>
        //                     {product.brands.map(brand =>
        //                         <Dropdown.Item
        //                             onClick={() => product.setSelectedBrand(brand)}
        //                             key={brand.id}
        //                         >
        //                             {brand.name}
        //                         </Dropdown.Item>
        //                     )}
        //                 </Dropdown.Menu>
        //             </Dropdown>
        //             <Form.Control
        //                 value={name}
        //                 onChange={e => setName(e.target.value)}
        //                 className="mt-3"
        //                 placeholder="Введите название устройства"
        //             />
        //             <Form.Control
        //                 value={price}
        //                 onChange={e => setPrice(Number(e.target.value))}
        //                 className="mt-3"
        //                 placeholder="Введите стоимость устройства"
        //                 type="number"
        //             />
        //             <Form.Control
        //                 className="mt-3"
        //                 type="file"
        //                 onChange={selectFile}
        //             />
        //             <hr/>
        //             <Button
        //                 variant={"outline-dark"}
        //                 onClick={addInfo}
        //             >
        //                 Добавить новое свойство
        //             </Button>
        //             {info.map(i =>
        //                 <Row className="mt-4" key={i.number}>
        //                     <Col md={4}>
        //                         <Form.Control
        //                             value={i.title}
        //                             onChange={(e) => changeInfo('title', e.target.value, i.number)}
        //                             placeholder="Введите название свойства"
        //                         />
        //                     </Col>
        //                     <Col md={4}>
        //                         <Form.Control
        //                             value={i.description}
        //                             onChange={(e) => changeInfo('description', e.target.value, i.number)}
        //                             placeholder="Введите описание свойства"
        //                         />
        //                     </Col>
        //                     <Col md={4}>
        //                         <Button
        //                             onClick={() => removeInfo(i.number)}
        //                             variant={"outline-danger"}
        //                         >
        //                             Удалить
        //                         </Button>
        //                     </Col>
        //                 </Row>
        //             )}
        //         </Form>
        //     </Modal.Body>
        //     <Modal.Footer>
        //         <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        //         <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
        //     </Modal.Footer>
        // </Modal>
    );
});

export default CreateProduct;
