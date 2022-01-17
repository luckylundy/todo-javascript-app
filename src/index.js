import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  li.className = "list-row";

  // div生成
  const div = document.createElement("div");
  div.className = "button-area";

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("inconmpete-list").appendChild(li);

  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
