import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import './style.scss'
import BoxSearchProduct from "./BoxSearchProduct";

const SearchBar = ( { data } ) => {
  
  const [query, setQuery] = useState("");

  const manufacturers = data.map(item => item.product_name)

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className='search-manufacturer'>
      <Combobox value={""}>
        <div className="flex">
          <Combobox.Input
            displayValue={(item) => item}
            onChange={(event) => setQuery(event.target.value)} 
            placeholder='Enter Keywords to search...'
          />
          <Combobox.Button className='search_button'>
              Search
          </Combobox.Button>
          <Transition
            as={Fragment} 
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} 
          >
            <Combobox.Options
              static
            >
              {filteredManufacturers?.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-manufacturer__option'
                >
                  Not Found
                </Combobox.Option>
              ) : (
                filteredManufacturers?.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          <BoxSearchProduct data={data} productName={item} />
                        </span>

                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBar;