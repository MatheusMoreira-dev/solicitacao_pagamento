import ServiceProviderItem from "./ServiceProviderItem";

function ServiceProvidersPagination({ serviceProviders }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 px-8 py-2">
          {serviceProviders.map((v) => (
            <ServiceProviderItem serviceProvider={v} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceProvidersPagination;
