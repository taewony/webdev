app DateApp {

  utils {

    function isSameDate(d1, d2) =
      d1?.toLocaleDateString() == d2?.toLocaleDateString()

    function localDateFromUTC(utc) =
      Date(utc.UTCYear, utc.UTCMonth, utc.UTCDay)

  }

  component DateDisplay {

    state date : Date

    invariant:
      renderOnlyIf isSameDate(old.date, date) == false

    template:
      span #datefield { text date.toLocaleDateString() }

    // date 값이 변경될 때 애니메이션을 한 번 총 1초 동안 실행
    // state-driven one-shot animation
    on update(date):
      animate #datefield frames [
        {bg:"#fff"}, {bg:"#324fff"}, {bg:"#fff"}
      ] duration 1000
  }

  component MyElement {

    state date : Date

    template:
      p { "Choose a date:" input type="date" on change -> dateChanged }
      p { button on click -> chooseToday { "Choose Today" } }
      p { "Date chosen:" DateDisplay bind date }

    transition dateChanged(e):
      let utc = e.target.valueAsDate
      if utc != null:
        date = localDateFromUTC(utc)

    transition chooseToday:
      date = now()
  }

  page index {

    head:
      style body { font-family: sans-serif }

    body:
      MyElement
}
