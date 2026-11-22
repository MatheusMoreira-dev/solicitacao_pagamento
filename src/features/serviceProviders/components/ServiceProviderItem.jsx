import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
  ItemActions,
} from "../../../components/ui/item";

import { Button } from "@/components/ui/button";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

function ServiceProviderItem({ serviceProvider, onDelete }) {
  let title = serviceProvider?.razaoSocial;

  if (serviceProvider?.nomeFantasia)
    title += " - " + serviceProvider.nomeFantasia;

  return (
    <Item variant="outline" size="xs" className="relative overflow-hidden">
      <ItemHeader>
        <ItemTitle>{title}</ItemTitle>
      </ItemHeader>

      <ItemContent>
        <ItemDescription>{serviceProvider?.cnpj}</ItemDescription>
      </ItemContent>

      <ItemFooter>
        <ItemActions className="justify-end w-full">
          <Button variant="outline" size="icon">
            <FiEdit />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(serviceProvider.id)}
          >
            <FaRegTrashAlt />
          </Button>
        </ItemActions>
      </ItemFooter>
    </Item>
  );
}

export default ServiceProviderItem;
