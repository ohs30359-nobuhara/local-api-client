import React, { FunctionComponent } from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Checkbox
} from "@material-ui/core";
import {Delete, Edit} from '@material-ui/icons'
import {Project} from "@interface/project";


/**
 * 行設定オプション
 * @interface
 */
interface Column {
  id: 'id' | 'name';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

/**
 * 行設定
 * @interface
 */
const columns: Column[] = [
  { id: 'name', label: 'プロジェクト名', minWidth: 100 },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  selectDeleteButton: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  rowButton: {
    marginRight: '5px'
  }
});

interface Props {
  records: Project[]
}

export const ProjectManagementPresentation: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div className={classes.selectDeleteButton}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Delete />}
        >
          チェックしたプロジェクトを削除
        </Button>
      </div>

      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" />

                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}

                <TableCell padding="checkbox" />
              </TableRow>
            </TableHead>
            <TableBody>
              {props.records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((project) => {
                return (
                  <TableRow hover role="checkbox">
                    <TableCell padding={"checkbox"}>
                      <Checkbox/>
                    </TableCell>

                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {project[column.id]}
                        </TableCell>
                      );
                    })}

                    <TableCell align={'right'}>
                      <Button className={classes.rowButton}
                        variant="contained"
                        color="default"
                        startIcon={<Edit/>}
                      >
                        編集
                      </Button>

                      <Button
                        variant="contained"
                        color="default"
                        startIcon={<Delete/>}
                      >
                        削除
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
};