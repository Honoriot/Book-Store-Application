"use client";
import { useFetchBookByIdQuery } from "@/app/redux/features/books/books.api";
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";

function SingleBookTemplate({ book }) {
    const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="ml-2">
      <div className="p-2 rounded shadow w-3/5">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">{book?.title}</div>
          <div>
            <Image
              src={`/books/${book?.coverImage}`}
              width="0"
              height="0"
              sizes="100vw"
              alt="Image Not found"
              priority={true}
              className="w-48 object-fill rounded-sm"
            />
          </div>
          <div>
            <span className="font-semibold">Author: </span>
            <span className="text-gray-400 text-sm">
              {book.author ? book?.author : "Not Available"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Publish On: </span>
            <span className="text-gray-400 text-sm">
              {book.publishOn ? book?.publishOn : "Not Available"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Category: </span>
            <span className="text-gray-400 text-sm">
              {book.category ? book?.category : "Not Available"}
            </span>
          </div>
          <div>
            <span className="font-semibold">Description: </span>
            <span className="text-gray-400 text-sm">
              {book.description ? book?.description : "Not Available"}
            </span>
          </div>
          <div>
            <button
              className="btn-primary px-6 space-x-1 flex items-center gap-1"
              onClick={() => handleAddToCart(book)}>
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SingleBook({ id }) {
  const { data: book = {}, isLoading } = useFetchBookByIdQuery(id);
  return (
    <div>
      <SingleBookTemplate book={book} />
    </div>
  );
}
