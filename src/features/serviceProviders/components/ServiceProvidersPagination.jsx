import ServiceProviderItem from "./ServiceProviderItem";

function ServiceProvidersPagination({ serviceProviders, onDelete, onEdit }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-8 py-2">
          {serviceProviders.map((v) => (
            <ServiceProviderItem
              key={v.id}
              serviceProvider={v}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceProvidersPagination;
