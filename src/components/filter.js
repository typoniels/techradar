import React from "react"

const Filter = ({onChange, placeholder, label, wrapperClass, quadrants, onlySearchField}) => {
    const onlySearch = onlySearchField ? onlySearchField : false
    return (
        <div className="p-5 bg-white dark:bg-gray-900">
            <div className="filter-label">
                <strong className={'snippet-filter-d text-yellow-700 dark:text-white inline-block mb-3'}>{label ? label : 'Welcher Themenbereich interessiert Sie?'}</strong>
            </div>
            <div className="filter-query-field">
                <input
                    id={'query'} type="search" aria-label="Search"
                    className="focus:ring-yellow-500 border-2 border-yellow-700 focus:border-yellow-500 rounded-none flex-1 block w-full rounded rounded-r-md sm:text-sm"
                    placeholder={placeholder} autoComplete={'chrome-off'} onChange={onChange}
                />
            </div>
            {onlySearch !== true &&
            <div className="filter-select-fields mt-3 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {quadrants &&
                <div className="select-field">
                    <select className={'w-full'} onChange={onChange} id={'quadrant'}>
                        <option value={''}>Alle Quadranten</option>
                        {quadrants.map((item, itr) => {
                            return (
                                <option value={item.node.Identifier.value}>{item.node.title.value}</option>
                            )
                        })}
                    </select>
                </div>
                }
                <div className="select-field">
                    <select className={'w-full'} onChange={onChange} id={'area'}>
                        <option value={''}>Alle Disziplinen</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="infra">Infra</option>
                        <option value="devops">DevOps</option>
                    </select>
                </div>

                <div className="select-field">
                    <select className={'w-full'} onChange={onChange} id={'level'}>
                        <option value={''}>Alle Level</option>
                        <option value="beginner">Einsteiger</option>
                        <option value="intermediate">Aufsteiger</option>
                        <option value="advanced">Fortgeschrittener</option>
                        <option value="very advanced">Sehr fortgeschrittener</option>
                        <option value="expert">Experte</option>
                    </select>
                </div>


                <div className="select-field">
                    <select className={'w-full'} onChange={onChange} id={'status'}>
                        <option value={''}>Alle Stadien</option>
                        <option value="adopt">Wissensaufbau</option>
                        <option value="trial">Praxis-Evaluierung</option>
                        <option value="assess">Projekt-Integration</option>
                        <option value="hold">Geschäfts-Feld</option>
                    </select>
                </div>
            </div>
            }
        </div>
    )
}

export default Filter