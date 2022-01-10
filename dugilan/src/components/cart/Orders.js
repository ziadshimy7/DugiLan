import React, { useState, useEffect } from "react";
import styles from "./Orders.module.css";
import defaultImage from "../../assets/cart_frame.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCart,
  increaseItemQuantity,
} from "../../store/actions/cartActions";
const Orders = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const onDeleteItemHandler = (id) => {
    dispatch(deleteItemFromCart(id));
  };
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(cartState?.cartItems);
  }, [cartState]);
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(orders);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);
    setOrders(items);
  };
  console.log(orders);
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={styles["dugilan__items"]}>
        <h1>Shopping Cart</h1>
        <div className={styles["dugilan__items-cart_labels-text"]}>
          <p>Order name</p>
          <p>Order ID</p>
          <p>QTY</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <Droppable droppableId="dropabble-1">
          {(provided) => (
            <div
              ref={provided.innerRef}
              className={styles["dugilan__items-container"]}
              {...provided.droppableProps}
            >
              {orders?.length > 0 ? (
                orders.map((item, index) => {
                  return (
                    <Draggable
                      key={item?._id}
                      draggableId={item?._id}
                      index={index}
                    >
                      {(provided) => (
                        <ul
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className={styles["dugilan__items-item"]}
                        >
                          <li className={styles["dugilan__items-item_name"]}>
                            <img
                              src={item?.image ? item?.image : defaultImage}
                              alt={item?.image ? "Cart" : "Image unavailable"}
                            />
                            <p>{item?.name} Theme</p>
                            <div className={styles["dugilan__item-icon"]}>
                              <BsFillTrashFill
                                onClick={() => {
                                  onDeleteItemHandler(item._id);
                                }}
                                size={24}
                              />
                            </div>
                          </li>
                          <li className={styles["dugilan__item-id"]}>
                            #{item?.id}
                          </li>
                          <li className={styles["dugilan__item-quantity"]}>
                            <button
                              className={
                                styles["dugilan__item-quantity_button"]
                              }
                            >
                              -
                            </button>
                            <span>x{item?.quantity}</span>
                            <button
                              onClick={() => {
                                dispatch(increaseItemQuantity(item));
                              }}
                              className={
                                styles["dugilan__item-quantity_button"]
                              }
                            >
                              +
                            </button>
                          </li>
                          <li>${item?.price}</li>
                          <li>
                            <BsFillTrashFill
                              className={styles["dugilan__item-remove_icon"]}
                              onClick={() => {
                                onDeleteItemHandler(item._id);
                              }}
                              size={20}
                            />
                          </li>
                        </ul>
                      )}
                    </Draggable>
                  );
                })
              ) : (
                <h2 className={styles["dugilan__items-cart_empty-text"]}>
                  Your Cart is empty.
                </h2>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Orders;
