import sys

root = "frontend"


def remove_header(s):
    s = s.split('\n', 1)[-1]
    if s.find('\n') == -1:
        return ''
    return s


def write_action_creator(action_name):
    target_file = "actions/actions.js"

    path = "{root}/{file}".format(
        root=root, file=target_file
    )

    f = open(path, "r+")

    old_contents = f.read(1)

    action_creator = to_camel_case(action_name.lower())
    addition = """export function {word_1}() {{
  return {{
    type: actions.{word_2},
    payload: null,
  }}
}}""".format(
        word_1=action_creator, word_2=action_name
    )

    new_contents = remove_header("{old}\n\n\n{new}".format(
        old=old_contents, new=addition
    ))
    f.write(remove_header(new_contents))
    f.close()


def write_action_name(action_name):
    target_file = "actions/action-types.js"

    path = "{root}/{file}".format(
        root=root, file=target_file
    )

    f = open(path, "a")

    addition = "\nexport const {name} = '{name}';".format(
        name=action_name
    )

    f.write(addition)
    f.close()


def to_camel_case(snake_str):
    components = snake_str.split('_')
    # We capitalize the first letter of each component except the first one
    # with the 'title' method and join them together.
    return components[0] + "".join(x.title() for x in components[1:])


def init(action_name):
    write_action_creator(action_name)
    write_action_name(action_name)


init(sys.argv[1])
