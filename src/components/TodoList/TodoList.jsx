import { useDispatch, useSelector } from "react-redux";
import { AddForm } from "./AddForm";
import { List } from "./List";
import { SearchBar } from "./SearchBar";
import s from "./TodoList.module.css";
import { useEffect } from "react";
import { fetchTodosThunk } from "../../redux/todos/operations";
import { selectIsLoading, selectIsError } from "../../redux/todos/selectors";
import Filter from "./Filter";
export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      <List />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error...</h1>}
    </div>
  );
};
