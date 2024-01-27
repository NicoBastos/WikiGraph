import { Input } from "@/components/ui/input";

const SearchBox = ({ searchTerm, setSearchTerm, handleKeyDown }: any) => {
  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBox;
