import { Input } from "@/components/ui/input";

const SearchBox = ({ searchTerm, setSearchTerm, handleKeyDown }: any) => {
  return (
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-96">
      <Input
        placeholder="Search any Wikipedia article... (press enter)"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full"
      />
    </div>
  );
};

export default SearchBox;
