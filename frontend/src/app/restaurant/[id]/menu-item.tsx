import { useContext, useState, Dispatch } from "react";
import { FoodItem, ingReducerAction } from "./data";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { Choices } from "@/library/type";
import AppCheckbox from "@/components/input/checkbox";
import { IngredientContext } from "./ingredients-context";

export default function MenuItem({
  food,
  ingredients,
  dispatchIng,
}: {
  food: FoodItem;
  ingredients: string[];
  dispatchIng: Dispatch<ingReducerAction>;
}) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const Ingredients = ({
    categories,
  }: {
    categories: Record<string, Choices[]>;
  }) => (
    <div className="grid grid-cols-5 gap-4">
      {Object.keys(categories).map((key, index) => (
        <div className="flex flex-col space-y-2" key={index}>
          <h5 className="font-semibold">{key}</h5>
          <div className="space-y-2">
            {categories[key]?.map((ingredient) => (
              <AppCheckbox
                key={ingredient?.id}
                label={ingredient.label}
                name={ingredient.label}
                value={ingredients.includes(ingredient?.id)}
                onChange={(e) => {
                  //   e.stopPropagation();
                  let type: "REMOVE_ITEM" | "ADD_ITEM" = "ADD_ITEM";
                  if (ingredients.includes(ingredient?.id))
                    type = "REMOVE_ITEM";
                  dispatchIng({
                    type,
                    payload: ingredient?.id,
                  });
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col space-y-4 p-4 bg-[#F0F0F0]">
      <div className="flex space-x-4  items-center">
        <Image
          src={food.image}
          alt={food.name}
          width={150}
          height={110}
          className="h-full w-auto object-contain"
        />
        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">{food.name}</h4>
          <p>{food.price}</p>
          <p>{food.description}</p>
        </div>
        <div className="text-black text-[20px]" onClick={handleToggle}>
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {open ? <Ingredients categories={food.categories} /> : null}
    </div>
  );
}
