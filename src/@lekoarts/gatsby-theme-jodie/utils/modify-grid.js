import {
    filterBySlug
  } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => {
    console.log(data);
    return filterBySlug(data, ["/info", "/how-we-met", "/cats", "/travel", "/engagement"])
}

export default modifyGrid
