import React from "react";
import Body from "./Body";
function BodyList() {
  return (
    <div className="flex gap-20 ml-20">
      <Body
        title="Salma Muqtar"
        image="https://img.freepik.com/free-photo/overjoyed-black-woman-holds-textbook-pencil-exclaims-with-amazement-look_273609-17881.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=ais"
        desc="This is the first one"
      />
      <Body
        title="Suad Sald"
        image="https://img.freepik.com/free-photo/red-haired-lady-eyeglasses-holds-books-shows-ok-sign_197531-23789.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=ais"
        desc="This is the second one"
      />
      <Body
        title="Ruwayda Ali"
        image="https://img.freepik.com/free-photo/waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224.jpg?size=626&ext=jpg&ga=GA1.1.2144588574.1686954102&semt=ais"
        desc="This is the third one"
      />
    </div>
  );
}

export default BodyList;
