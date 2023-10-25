import Avatar from './Avatar';

const Contact = ({ id, onClick, username, selected, online }) => {
  return (
    <div
      onClick={() => onClick(id)}
      key={id}
      className={
        'border-b border-gray-100 flex items-center gap-2 cursor-pointer hover:bg-blue-100 transition-all ease-in-out duration-300 first:border-t relative ' +
        (selected ? 'bg-blue-100' : '')
      }
    >
      {selected && <div className="w-1 bg-blue-500 h-12 rounded-r absolute"></div>}
      <div className="py-2 pl-4 flex gap-2 items-center">
        <Avatar online={online} username={username} userId={id} />
        <div className="pb-1">
          <span className="text-gray-800 font-medium"> {username}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
