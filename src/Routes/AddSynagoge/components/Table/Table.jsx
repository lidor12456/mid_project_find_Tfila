import React from 'react'
// import AddInputBtn from '../AddInputBtn/AddInputBtn'
import Input from '../Input/Input'

function Table({synagoeObj,setSynagogeObj}) {
  return (
    <>
<table className="tg schedule-inputs">

        <thead>
          <tr>
            <th className="tg-0lax"></th>
            <th className="tg-0lax">Sunday</th>
            <th className="tg-0lax">Monday</th>
            <th className="tg-0lax">Tuesday</th>
            <th className="tg-0lax">Wednesday</th>
            <th className="tg-0lax">Thursday</th>
            <th className="tg-0lax">Friday</th>
            <th className="tg-0lax">Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0lax">Shacharit</td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Sunday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Sunday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Sunday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              {" "}
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Monday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Monday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Monday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              {" "}
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Tuesday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Tuesday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Tuesday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              {" "}
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Wednesday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Wednesday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Wednesday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              {" "}
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Thursday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Thursday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Thursday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              {" "}
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Friday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Friday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Friday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              {" "}
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Saturday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.SHACHARIT.Saturday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.SHACHARIT.Saturday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">Minha</td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Sunday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Sunday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Sunday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Monday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Monday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Monday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Tuesday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Tuesday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Tuesday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Wednesday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Wednesday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Wednesday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Thursday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Thursday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Thursday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Friday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Friday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Friday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.MINHA.Saturday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.MINHA.Saturday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.MINHA.Saturday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
          </tr>
          <tr>
            <td className="tg-0lax">Arvit</td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Sunday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Sunday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Sunday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Monday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Monday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Monday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Tuesday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Tuesday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Tuesday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Wednesday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Wednesday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Wednesday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Thursday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Thursday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Thursday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Friday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Friday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Friday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
            <td className="tg-0lax">
              <Input
                pieceOfState={synagoeObj.ARVIT.Saturday}
                setSynagogeObj={setSynagogeObj}
                isFirstPosition={true}
              />
              <Input
                pieceOfState={synagoeObj.ARVIT.Saturday}
                setSynagogeObj={setSynagogeObj}
              />
              {/* <AddInputBtn
                pieceOfState={synagoeObj.ARVIT.Saturday}
                setSynagogeObj={setSynagogeObj}
              /> */}
            </td>
          </tr>
        </tbody>
      </table>    </>
  )
}

export default Table