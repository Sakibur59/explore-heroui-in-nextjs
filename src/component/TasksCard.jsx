import { Card } from "@heroui/react";
import Link from "next/link";


const TasksCard = ({task}) => {
  return (
    <Card variant="primary" className="border-2 border-primary">
     
      <Card.Header>
        <Card.Title>{task.title}</Card.Title>
        <Card.Description>
          {task.description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        {/* <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link> */}
      </Card.Footer>
    </Card>
  );
};

export default TasksCard;
