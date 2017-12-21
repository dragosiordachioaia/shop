import sys

root = "frontend"


def add_to_store(reducer_name):
    target_file = "reducers/store.js"

    path = "{root}/{file}".format(
        root=root, file=target_file
    )

    f = open(path, "r")

    old_contents = f.read()
    f.close()
    old_contents_parts = old_contents.split(
        "\nexport default assembleState({"
    )

    old_contents_1 = old_contents_parts[0]
    old_contents_2 = old_contents_parts[1]

    reducer_name = reducer_name.lower()
    new_reducer_import = "import {name} from './{name}_reducer';".format(
        name=reducer_name
    )

    new_contents_1 = "{old}{new}\n{assemble}".format(
        old=old_contents_1,
        new=new_reducer_import,
        assemble="\nexport default assembleState({"
    )

    new_contents_2 = old_contents_2.split("\n});")[0]
    new_contents_2 += "\n  {name},\n}});".format(
        name=reducer_name,
    )

    new_contents = "{}{}".format(new_contents_1, new_contents_2)

    f = open(path, "w")
    f.write(new_contents)
    f.close()


def write_reducer(reducer_name):
    reducer_name = reducer_name.lower()
    target_file = "reducers/{name}_reducer.js".format(name=reducer_name)

    path = "{root}/{file}".format(
        root=root, file=target_file
    )

    f = open(path, "x")

    addition = """import * as actions from '../actions/action-types';\n
export default function(state = {}, action) {
  let newState;
  switch(action.type) {
    default:
      return state;
  }
}
"""
    f.write(addition)
    f.close()


def init(reducer_name):
    write_reducer(reducer_name)
    add_to_store(reducer_name)


init(sys.argv[1])
