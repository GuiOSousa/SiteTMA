import type { FC } from "react";
import './CollaboratorInfo.css'
import '../pages/Home.css'

interface CollaboratorInfoProps {
	name: string;
    icon: string;
    description: string;
    gitHub: string;
}

export const CollaboratorInfo: FC<CollaboratorInfoProps> = ({name, icon, description, gitHub}) => {
  return (
    <>
    <div className="CollaboratorInfo">
    <i className="material-icons AboutIconColor">{icon}</i>
    <h2 className="CollaboratorName">{name}</h2>
    <p className="CollaboratorDesc">{description}</p>
    <a href={gitHub} className="CollaboratorLink">GitHub</a>
    </div>
    </>
  )
}

export default CollaboratorInfo