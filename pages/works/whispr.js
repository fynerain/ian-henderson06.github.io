import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                COVID Tracker <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/whispr-eyecatcher.png"
                alt="Whispr"
            />
            <P>
                A social media website consisting of a front end and API written in JavaScript/
                React. It is using MongoDB for the database which stores profiles, posts and all
                contents of a post
                <br/><br/>
                Currently in a WIP state due to some learning required for the API
                App design is almost complete and utilises a dark/light mode theme with complete
                social features and a walls system
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/React-Whispr">
                        https://github.com/Aimireal/React-Whispr
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                    <Link href="https://github.com/Aimireal/React-Whispr-API">
                        https://github.com/Aimireal/React-Whispr-API
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Web</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>JavaScript | React | MongoDB</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/placeholderapp.png"/>
        </Container>
    </Layout>
)

export default Project