import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;
  li.className = "list-row";

  // div生成
  const div = document.createElement("div");
  div.className = "button-area";

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.className = "complete-button";
  completeButton.addEventListener("click", () => {
    // 「未完了のTODO」にある行を削除
    deleteFromIncompleteList(completeButton.closest(".list-row"));
    // 完了ボタン押したら「完了したTODO」にDOMを生成
    // 押された完了ボタン(completeButtonがそれ)の祖先のliの値を取得する
    const incompleteText = completeButton.closest(".list-row").childNodes[0]
      .data;
    // li生成して取得した値を代入
    const li = document.createElement("li");
    li.innerText = incompleteText;
    li.className = "list-row";
    // div生成
    const div = document.createElement("div");
    div.className = "button-area";
    // 生成したDOMに戻すボタンを付与
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.className = "back-button";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの祖先タグ(li)を完了リストから削除
      const deleteTarget = backButton.closest(".list-row");
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.closest(".list-row").childNodes[0].data;
      createIncompleteList(text);
    });
    // liタグに各子要素を設定
    li.appendChild(div);
    div.appendChild(backButton);
    // 完了リストにliタグを追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.className = "delete-button";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの祖父母タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest(".list-row"));
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
