import dishes from "../assets/dishes.svg";
import trash from "../assets/trash.svg";
import vegetable from "../assets/vegetable.svg";
import badmeat from "../assets/bad-meat.svg";


const featureList = [
  {
    id: 0,
    feature: "Фермерские продукты",
    name: "Еда намного вкуснее",
    image: dishes,
    isNegative: false,
    about: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
  },
  {
    id: 1,
    feature: "Магазинные продукты",
    name: "Просроченные продукты",
    image: trash,
    isNegative: true,
    about: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
  },
  {
    id: 2,
    feature: "Фермерские продукты",
    name: "Натуральные продукты",
    image: vegetable,
    isNegative: false,
    about: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
  },
  {
    id: 3,
    feature: "Магазинные продукты",
    name: "Некачественное мясо",
    image: badmeat,
    isNegative: true,
    about: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов.",
  },
]

export default featureList;