const Track = (props) => {
  const {trackText} = props;
  let list = "1. BLOOD.\n2. DNA.\n3. YAH.\n4. ELEMENT.\n5. FEEL.\n6. LOYALTY. FT. RIHANNA.\n7. PRIDE.\n8. HUMBLE.\n9. LUST.\n10. LOVE.\n11. XXX. FT. U2.\n12. FEAR.\n13. GOD.\n14. DUCKWORTH."
  if (trackText === 'NATION.') {
    list = "1. DUCKWORTH.\n2. GOD.\n3. FEAR.\n4. XXX.\n5. LOVE.\n6. LUST.\n7. HUMBLE.\n8. PRIDE.\n9. LOYALTY.\n10. FEEL.\n11. ELEMENT.\n12. YAH.\n13. DNA.\n14. BLOOD. "
  }
  return <div>
    {list}
  </div>
}

export default Track;