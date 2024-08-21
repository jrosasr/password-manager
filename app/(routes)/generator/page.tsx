import { FormGenerator } from "./components/FormGenerator";
import { HeaderGenerator } from "./components/HeaderGenerator";

export default function GeneratorPage() {
    return (
        <div>
            <HeaderGenerator />
            <FormGenerator />
        </div>
    );
}