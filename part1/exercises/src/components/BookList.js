export default function BookList() {
   let pageTitle = "Book LIst";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kuicIGljgupShqDafZMbmY2faeaC9fMEag&usqp=CAU";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjf_ggKbW7jIOxUIQSp1TmlgeumA9KH8NU3GPIBc1rRiu22BnMcUq76g4Q3hWES-Lh_Ig&usqp=CAU";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8a6XkPBsURBQKp89Hrt958GmhDxAfmPSiQg&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Harry Potter" />
         <img src={book2} alt="Abandoned Kingdom!" />
         <img src={book3} alt="The Psychology of MONEY!" />
      </div>      
   );
}