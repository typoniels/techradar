import React from "react"

const ItemSection = ({ sectionClass, children }) => {
   const additionalClass = sectionClass ? ' ' + sectionClass : ''
  return (
    <div className={'layout '}>
      <section className={"item-section py-3" + additionalClass}>
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                  {children}
          </div>
      </section>
    </div>
  )
}

export default ItemSection
