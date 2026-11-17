import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "../../../components/ui/item";

function ServiceProviderItem({ serviceProvider }) {
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

      <ItemFooter></ItemFooter>
    </Item>
  );
}

export default ServiceProviderItem;
