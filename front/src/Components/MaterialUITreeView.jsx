import React from 'react';
import { makeStyles } from '@mui/styles';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import data from '../Data/data';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
});

const RecursiveTreeView = ({ node }) => (
  <TreeItem key={node.id} nodeId={node.id} label={<Typography variant="body2">{node.name}</Typography>}>
    {Array.isArray(node.children) ? node.children.map((child) => <RecursiveTreeView key={child.id} node={child} />) : null}
  </TreeItem>
);

const MaterialUITreeView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
      >
        <RecursiveTreeView node={data} />
      </TreeView>
    </div>
  );
};

export default MaterialUITreeView;
