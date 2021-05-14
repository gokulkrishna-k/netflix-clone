import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import SelectionFilter from "../utils/selection-filter";

export default function Browse() {
    const { series } = useContent("series");
    const { films } = useContent("films");

    const slides = SelectionFilter({ series, films });

    return <BrowseContainer slides={slides} />;
}
