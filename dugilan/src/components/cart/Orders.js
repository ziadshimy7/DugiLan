import React, { useState, useEffect } from "react";
import styles from "./Orders.module.css";
import defaultImage from "../../assets/cart_frame.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/actions/cartActions";
import { useTranslation } from "react-i18next/";
import { useSiteDirection } from "../../contexts/SiteDirectionContext";
const Orders = () => {
  const dispatch = useDispatch();
  const { siteDirection } = useSiteDirection();
  const { t } = useTranslation();
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
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={styles["dugilan__items"]}>
        <h1>{t("cart.header")}</h1>
        <div
          className={`${styles["dugilan__items-cart_labels-text"]} ${
            siteDirection && styles["dugilan__items-cart_labels-text-arabic"]
          } `}
        >
          <p>{t("cart.order-name")}</p>
          <p>{t("cart.order-id")}</p>
          <p>{t("cart.quantity")}</p>
          <p>{t("cart.price")}</p>
          <p>{t("cart.remove")}</p>
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
                            <p
                              className={`${
                                siteDirection &&
                                styles["dugilan__item-name-arabic"]
                              }`}
                            >
                              {item?.name} Theme
                            </p>
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
                              onClick={() =>
                                dispatch(decreaseItemQuantity(item))
                              }
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
                  {t("cart.empty-cart-text")}
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
