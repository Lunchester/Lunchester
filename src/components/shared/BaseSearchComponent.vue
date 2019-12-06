<template>
  <div class="search">
    <input class="search__input" type="text" placeholder="Search" />
    <button class="search__button">Add</button>
  </div>
</template>

<style scoped>
.search {
  margin: 0 24px;
  background-color: #fff;
  padding: 0 0 24px 0;
  position: relative;
}

.search::before {
  content: "";
  display: block;
  background-color: #fff;
  height: 24px;
  width: calc(100% + 48px);
  border-radius: 24px 24px 0 0;
  position: absolute;
  top: -24px;
  left: -24px;
}

.search__input {
  border: none;
  background: #f5f5f5;
  border-radius: 999px;
  height: 48px;
  width: calc(100% - 138px);
  font-size: 18px;
  padding-left: 48px;
  background-image: url("/img/search.svg");
  background-repeat: no-repeat;
  background-position: 12px center;
  background-size: 28px 28px;
}

.search__button {
  border: none;
  background: #7ecf95;
  border-radius: 999px;
  color: #fff;
  height: 48px;
  font-size: 18px;
  padding: 0 24px;
  margin-left: 8px;
}
</style>
