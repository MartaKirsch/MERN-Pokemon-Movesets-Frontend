import AuthorWrapper from 'components/Moveset/Main/Topbar/AuthorWrapper';

const Author = ({moveset}) => {
  return(
    <AuthorWrapper>
      <div>{moveset.name}</div>
      <div className="author">{`by ${moveset.author}`}</div>
    </AuthorWrapper>
  )
};

export default Author;
