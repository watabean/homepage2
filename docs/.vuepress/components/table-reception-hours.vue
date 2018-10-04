<template>
  <div class="group is-scroll-x">
    <table class="table is-border is-center is-font-quicksand is-round is-mobile-only-xxs">
      <thead class="is-plain is-round is-weight-900 is-cyan">
        <tr>
          <th>
            <i class="fas fa-clock" aria-hidden="true"></i>
            <span class="text is-mobile-xxs is-desktop-md">診療時間</span>
          </th>
          <th>月</th>
          <th>火</th>
          <th>水</th>
          <th>木</th>
          <th>金</th>
          <th class="is-saturday">土</th>
          <th class="is-sunday">日祝</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>09:00～12:00</td>
          <td>○</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
        </tr>
        <tr>
          <td>14:00～19:00</td>
          <td>○</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
          <td>○</td>
          <td>○</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
@import '~moftone/src/scss/tone/_moftone.scss';
.is-saturday {
  background-color: $blue-100;
}
.is-sunday {
  background-color: $red-100;
}
.table {
  display: table;
}
</style>
